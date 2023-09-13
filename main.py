import aiogram
from config import TOKEN
from aiogram import Bot, Dispatcher, types, executor
from aiogram.types.web_app_info import WebAppInfo

bot = Bot(TOKEN)
dp = Dispatcher(bot)

@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    markup = types.ReplyKeyboardMarkup()
    markup.add(types.KeyboardButton('Начать', web_app=WebAppInfo(url="https://www.google.com/")))
    await message.answer("Добро пожаловать!", reply_markup=markup)


executor.start_polling(dp)