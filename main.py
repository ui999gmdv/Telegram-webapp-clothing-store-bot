import aiogram
from config import *
from aiogram import Bot, Dispatcher, types, executor
from aiogram.types.web_app_info import WebAppInfo

bot = Bot(TOKEN)
dp = Dispatcher(bot)

@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    markup = types.ReplyKeyboardMarkup()
    markup.add(types.KeyboardButton('Начать', web_app=WebAppInfo(url=WEBAPP_URL)))
    await message.answer("Добро пожаловать!", reply_markup=markup)


executor.start_polling(dp)