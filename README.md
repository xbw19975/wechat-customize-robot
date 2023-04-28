<h1 align="center">Welcome to wechat-chatgpt 👋</h1>

> Use ChatGPT On Wechat via wechaty  


## 🌟 Features

- Interact with WeChat and ChatGPT:
   - Use ChatGPT on WeChat with [wechaty](https://github.com/wechaty/wechaty) and [Official API](https://openai.com/blog/introducing-chatgpt-and-whisper-apis)
   - Add conversation support
   - Support command setting

- Dialogue support:
   - 看美女        (返回图片)
   - 看coser      (返回图片)
   - 舔狗日记      (返回文字)
   - 温柔语录      (返回文字)
   - 历史上的今天   (返回文字)

## Use with nodejs

> You need NodeJS 18.0.0 version and above

```sh
# Clone the project
git clone https://github.com/fuergaosi233/wechat-chatgpt.git && cd wechat-chatgpt
# Install dependencies
npm install
# Copy the configuration file according to the template
cp .env.example .env
# Edit the configuration file
vim .env
# Start project
npm run dev
```

> Please make sure your WeChat account can log in [WeChat on web](https://wx.qq.com/)

## 📝 Environment Variables

| name                         | description                                                                                                                                                                          |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| API                          | API endpoint of ChatGPT                                                                                                                                                              |
| OPENAI_API_KEY               | [create new secret key](https://platform.openai.com/account/api-keys)                                                                                                                |
| MODEL                        | ID of the model to use. Currently, only gpt-3.5-turbo and gpt-3.5-turbo-0301 are supported.                                                                                          |
| TEMPERATURE                  | What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. |
| CHAT_TRIGGER_RULE            | Private chat triggering rules.                                                                                                                                                       |
| DISABLE_GROUP_MESSAGE        | Prohibited to use ChatGPT in group chat.                                                                                                                                             |
| CHAT_PRIVATE_TRIGGER_KEYWORD | Keyword to trigger ChatGPT reply in WeChat private chat                                                                                                                              |
| BLOCK_WORDS                  | Chat blocker words, (works for both private and group chats, Use, Split)                                                                                                             |
| CHATGPT_BLOCK_WORDS          | The blocked words returned by ChatGPT(works for both private and group chats, Use, Split)                                                                                            |

## ⌨️ Commands
> Enter in the WeChat chat box
```shell
/cmd help # Show help
/cmd prompt <PROMPT> # Set prompt
/cmd clear # Clear all sessions since last boot
```
