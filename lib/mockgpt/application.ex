defmodule Mockgpt.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      MockgptWeb.Telemetry,
      {DNSCluster, query: Application.get_env(:mockgpt, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: Mockgpt.PubSub},
      # Start the Finch HTTP client for sending emails
      {Finch, name: Mockgpt.Finch},
      # Start a worker by calling: Mockgpt.Worker.start_link(arg)
      # {Mockgpt.Worker, arg},
      # Start to serve requests, typically the last entry
      MockgptWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Mockgpt.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    MockgptWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
