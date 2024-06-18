import { Header } from "./components/Header"
import { Section } from "./components/Section"

const users = [
  {
    id: 1,
    username: "inaki",
    img: "https://imgs.search.brave.com/FwEvdufQQlAWWVIbuyCP7RbUtydC3WxCYjMdCfcor1U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4w/LnBzaWNvbG9naWEt/b25saW5lLmNvbS9l/cy9wb3N0cy81Lzkv/Ny9sYV9wc2ljb2xv/Z2lhX2RlX2xvc19j/b2xvcmVzX2VuX2xh/c19mb3Rvc19kZV9w/ZXJmaWxfMzc5NV8x/XzYwMC5qcGc" 
  },
  {
    id: 2,
    username: 'midudev',
    img: 'https://imgs.search.brave.com/FwEvdufQQlAWWVIbuyCP7RbUtydC3WxCYjMdCfcor1U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4w/LnBzaWNvbG9naWEt/b25saW5lLmNvbS9l/cy9wb3N0cy81Lzkv/Ny9sYV9wc2ljb2xv/Z2lhX2RlX2xvc19j/b2xvcmVzX2VuX2xh/c19mb3Rvc19kZV9w/ZXJmaWxfMzc5NV8x/XzYwMC5qcGc'
  },
  {
    id: 3,
    username: 'faztcode',
    img: 'https://imgs.search.brave.com/FwEvdufQQlAWWVIbuyCP7RbUtydC3WxCYjMdCfcor1U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4w/LnBzaWNvbG9naWEt/b25saW5lLmNvbS9l/cy9wb3N0cy81Lzkv/Ny9sYV9wc2ljb2xv/Z2lhX2RlX2xvc19j/b2xvcmVzX2VuX2xh/c19mb3Rvc19kZV9w/ZXJmaWxfMzc5NV8x/XzYwMC5qcGc'
  },
  {
    id: 4,
    username: 'mouredev',
    img: 'https://imgs.search.brave.com/FwEvdufQQlAWWVIbuyCP7RbUtydC3WxCYjMdCfcor1U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4w/LnBzaWNvbG9naWEt/b25saW5lLmNvbS9l/cy9wb3N0cy81Lzkv/Ny9sYV9wc2ljb2xv/Z2lhX2RlX2xvc19j/b2xvcmVzX2VuX2xh/c19mb3Rvc19kZV9w/ZXJmaWxfMzc5NV8x/XzYwMC5qcGc'
  },
  {
    id: 5,
    username: "inaki",
    img: "https://imgs.search.brave.com/FwEvdufQQlAWWVIbuyCP7RbUtydC3WxCYjMdCfcor1U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4w/LnBzaWNvbG9naWEt/b25saW5lLmNvbS9l/cy9wb3N0cy81Lzkv/Ny9sYV9wc2ljb2xv/Z2lhX2RlX2xvc19j/b2xvcmVzX2VuX2xh/c19mb3Rvc19kZV9w/ZXJmaWxfMzc5NV8x/XzYwMC5qcGc" 
  },
  {
    id: 6,
    username: "inaki",
    img: "https://imgs.search.brave.com/FwEvdufQQlAWWVIbuyCP7RbUtydC3WxCYjMdCfcor1U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4w/LnBzaWNvbG9naWEt/b25saW5lLmNvbS9l/cy9wb3N0cy81Lzkv/Ny9sYV9wc2ljb2xv/Z2lhX2RlX2xvc19j/b2xvcmVzX2VuX2xh/c19mb3Rvc19kZV9w/ZXJmaWxfMzc5NV8x/XzYwMC5qcGc" 
  },
  {
    id: 7,
    username: "inaki",
    img: "https://imgs.search.brave.com/FwEvdufQQlAWWVIbuyCP7RbUtydC3WxCYjMdCfcor1U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4w/LnBzaWNvbG9naWEt/b25saW5lLmNvbS9l/cy9wb3N0cy81Lzkv/Ny9sYV9wc2ljb2xv/Z2lhX2RlX2xvc19j/b2xvcmVzX2VuX2xh/c19mb3Rvc19kZV9w/ZXJmaWxfMzc5NV8x/XzYwMC5qcGc" 
  },
  {
    id: 8,
    username: "inaki",
    img: "https://imgs.search.brave.com/FwEvdufQQlAWWVIbuyCP7RbUtydC3WxCYjMdCfcor1U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4w/LnBzaWNvbG9naWEt/b25saW5lLmNvbS9l/cy9wb3N0cy81Lzkv/Ny9sYV9wc2ljb2xv/Z2lhX2RlX2xvc19j/b2xvcmVzX2VuX2xh/c19mb3Rvc19kZV9w/ZXJmaWxfMzc5NV8x/XzYwMC5qcGc" 
  },
]

const publications = [
  {
    id: users[0].id,
    username: users[0].username,
    img: users[0].img,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', 
  },
  {
    id: users[1].id,
    username: users[1].username,
    img: users[1].img,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  },
  {
    id: users[2].id,
    username: users[2].username,
    img: users[2].img,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  },
  {
    id: users[3].id,
    username: users[3].username,
    img: users[3].img,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  },
]

function App() {

  return (
    <div className="max-w-[1000px] mt-4 mx-auto w-full flex flex-col items-center">
      <Header users={users}/>
      <Section publications={publications}/>
    </div>
  )
}

export default App
