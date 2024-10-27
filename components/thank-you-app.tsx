'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { useSpring, animated } from 'react-spring'

export function ThankYouApp() {
  const [message, setMessage] = useState('')

  const [props, api] = useSpring(() => ({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
  }))

  const handleClick = (newMessage: string) => {
    setMessage(newMessage)
    api.start({
      from: { opacity: 0, transform: 'scale(0.8)' },
      to: { opacity: 1, transform: 'scale(1)' },
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-4">
      <div className="grid grid-cols-1 gap-4 text-center w-full max-w-md">
        <Button 
          className="w-full bg-blue-500 hover:bg-blue-600" 
          onClick={() => handleClick('サンライズメンバーの方運営ありがとうございました')}
        >
          サンライズメンバー
        </Button>
        <Button 
          className="w-full bg-green-500 hover:bg-green-600" 
          onClick={() => handleClick('講義登壇者の皆様ありがとうございました')}
        >
          講義登壇者
        </Button>
        <Button 
          className="w-full bg-yellow-500 hover:bg-yellow-600" 
          onClick={() => handleClick('参加者の皆様お疲れさまでした')}
        >
          参加者
        </Button>
        <Button 
          className="w-full bg-purple-500 hover:bg-purple-600" 
          onClick={() => handleClick('失敗ばかりでしたがとても勉強になりました。参加できて本当によかったです。次回以降も楽しみにしております。')}
        >
          感想
        </Button>
      </div>
      <animated.div style={props} className="mt-8 text-xl font-bold text-white text-center">
        {message}
      </animated.div>
    </div>
  )
}