<div className="w-full h-screen bg-[#1C1C1C] fixed">
    <header className="w-full h-[80px] bg-[#212121] px-[80px]">
      <div className="h-full w-full flex items-center">
        <div className="flex items-center">
          <p className="font-semibold text-[30px] text-[#3E64DB]">MockGPT</p>
          <div className="ml-1 mt-2 w-fit h-fit p-[2px] px-1.5 bg-[#3E64DB] text-white rounded-[3px] font-[500] text-[10px]">
            Usage.so
          </div>
        </div>
        <ul className="flex items-center ml-[40px] text-[14px] text-white font-[500]">
          <li className="ml-[40px]">Product</li>
          <li className="ml-[40px]">Customers</li>
          <li className="ml-[40px]">Resources</li>
          <li className="ml-[40px]">Pricing</li>
          <li className="ml-[40px]">Demo</li>
        </ul>
      </div>
    </header>
    <main className="w-full mx-auto mt-[60px] text-white">
      <%!-- <p className="font-[500] text-[24px]">
        A <span className="text-[#3E64DB]">Mock API</span> for Developing and Testing
        Generative <span className="text-[#3E64DB]">AI Apps</span>
      </p> --%>
      <div className="grid grid-cols-2 gap-[120px] mt-[40px] mx-[80px]">
        <div className="block">
          <p className="text-[20px] font-medium">How to use</p>
          <ul className="mt-[20px] text-left">
            <li className="flex w-full mb-4">
              <div className="w-[36px] h-[36px] px-4 rounded-[5px] bg-[#232323] flex items-center justify-center">
                <p className="font-semibold text-[#727478]">1</p>
              </div>
              <div className="w-full ml-[20px]">
                <p className="text-[14px] text-[#A6A6A6]">Select provider</p>
                <div className="w-1/2 p-2 px-4 mt-2 border-[1px] border-[#363636] rounded-[6px] ">
                  <p className="text-[14px] text-[#A6A6A6] ">Open AI</p>
                </div>
              </div>
            </li>
  
            <li className="flex w-full mb-4">
              <div className="w-[36px] h-[36px] px-4 rounded-[5px] bg-[#232323] flex items-center justify-center">
                <p className="font-semibold text-[#727478]">2</p>
              </div>
              <div className="w-full ml-[20px]">
                <p className="text-[14px] text-[#A6A6A6]">
                  Set the base URL used by your client code to
                </p>
                <div className="flex">
                  <div className="w-3/4 p-2 px-4 mt-2 border-[1px] border-[#363636] bg-[#212121] rounded-[6px] ">
                    <p className="text-[14px] text-[#A6A6A6] ">
                      https://mockgpt-3.fly.dev/v1
                    </p>
                  </div>
                  <div className="w-[80px] ml-[10px] flex items-center justify-center p-2 mt-2 border-[1px] border-[#363636] rounded-[6px] ">
                    <p className="text-[12px] text-[#A6A6A6] ">Copy Link</p>
                  </div>
                </div>
              </div>
            </li>
  
            <li className="flex w-full mb-4">
              <div className="w-[36px] h-[36px] px-4 rounded-[5px] bg-[#232323] flex items-center justify-center">
                <p className="font-semibold text-[#727478]">3</p>
              </div>
              <div className="w-full ml-[20px]">
                <p className="text-[14px] text-[#A6A6A6]">
                  Set the API key(this key is unique to you).
                </p>
                <div className="flex">
                  <div className="w-3/4 p-2 px-4 mt-2 border-[1px] border-[#363636] bg-[#212121] rounded-[6px] ">
                    <p className="text-[14px] text-[#A6A6A6] ">
                      jGfx2qeqk6K_uyrH
                    </p>
                  </div>
                  <div className="w-[80px] ml-[10px] flex items-center justify-center p-2 mt-2 border-[1px] border-[#363636] rounded-[6px] ">
                    <p className="text-[12px] text-[#A6A6A6] ">Copy key</p>
                  </div>
                </div>
              </div>
            </li>
  
            <li className="flex w-full mb-4">
              <div className="w-[36px] h-[36px] px-4 rounded-[5px] bg-[#232323] flex items-center justify-center">
                <p className="font-semibold text-[#727478]">4</p>
              </div>
              <div className="w-4/5 ml-[20px]">
                <p className="text-[14px] text-[#A6A6A6]">
                  Make a request to get a chat completion and receive the default stubbed response (fast!). See <span className="text-[#3E64DB]">code examples</span>
                </p>
              </div>
            </li>
  
            <li className="flex w-full mb-4">
              <div className="w-[36px] h-[36px] px-4 rounded-[5px] bg-[#232323] flex items-center justify-center">
                <p className="font-semibold text-[#727478]">5</p>
              </div>
              <div className="w-4/5 ml-[20px]">
                <p className="text-[14px] text-[#A6A6A6]">
                  Set the next response via the text box below then make another completion request and receive the response you configured.
                </p>
              </div>
            </li>
  
            <li className="flex w-full mb-4">
              <div className="w-[36px] h-[36px] px-4 rounded-[5px] bg-[#232323] flex items-center justify-center">
                <p className="font-semibold text-[#727478]">6</p>
              </div>
              <div className="w-4/5 ml-[20px]">
                <p className="text-[14px] text-[#A6A6A6]">
                 When you're ready to switch to the live API, simply switch back the base URL and API key parameters and you're good to go!
   configured.
                </p>
              </div>
            </li>
          </ul>
  
          <button className="border-[1px] ml-[40px] text-left border-[#3E64DB] py-1.5 px-3 text-[12px] text-[#3E64DB] rounded-[6px]">
            <p>API documentation</p>
          </button>
        </div>
        <div className="">
          <p className="font-[500] text-[20px] text-center">
            A <span className="text-[#3E64DB]">Mock API</span> for Developing and Testing
            Generative <span className="text-[#3E64DB]">AI Apps</span>
          </p>
          <div className="w-fit grid grid-cols-2 gap-[10px] mt-[20px]">
            <button className="w-[120px] text-[#212121] bg-[#fff] rounded-full py-1.5 text-[12px] font-[500]"> Python</button> 
            <button className="w-[120px] text-[#A6A6A6] bg-[#212121] border-[1px] border-[#363636] rounded-full py-1.5 text-[12px] font-[500]"> Javascript</button>
          </div>

            <div className="w-full mt-[10px] p-[20px] pt-[16px]   text-[#A6A6A6] bg-[#212121] border-[1px] border-[#363636] rounded-[10px] text-[14px] leading-[24px] font-[500]"> import os <br/>
import openai <br>
openai.api_base = "https://mockgpt-3.fly.dev/v1" <br>
openai.api_key = "jGfx2qeqk6K_uyrH" <br>
chat_completion = openai.ChatCompletion.create(model=
"gpt-3.5turbo", messages=[{"role": "user", "content": "Hello world"}]) <br>
print(chat_completion.choices[0].message.content)</div>

          

        </div>
      </div>
      
    </main>
  </div>;
  