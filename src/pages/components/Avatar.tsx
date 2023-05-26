import Image from 'next/image'

export default function Avatar() {
  return (
    <Image className='rounded-full'
    alt='Avatar'
    src='/images/avatar.jpg'
    height={30}
    width={30}
    />
  )
}
