import fs from 'fs'
import path from 'path'

// 获取翻译文件
export async function getTranslations(locale, namespace) {
  const filePath = path.join(process.cwd(), 'public', 'locales', locale, `${namespace}.json`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileContents)
}

// 创建翻译函数
export function createTranslator(translations) {
  return function t(key) {
    const keys = key.split('.')
    let value = translations
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }
}
