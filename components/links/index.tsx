export default function Links({ title }: { title: string }) {
  switch (title) {
    case "Projects":
      return <>
        <a href="https://web-ecommerce-shop.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-fit ml-auto">
          <div>portfolio</div>
        </a>
        <a href="https://lojunrui.com/" target="_blank" rel="noopener noreferrer" className="w-fit ml-auto">
          <div>portfolio</div>
        </a>
        <a href="https://hcguirmehicogmhi45wuct98m4xf9cjhu8fhxmio.onrender.com" target="_blank" rel="noopener noreferrer" className="w-fit ml-auto">
          <div>&quot;your face looked like you&apos;d been erased &quot;</div>
        </a>
        <a href="https://heaven-chat.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-fit ml-auto">
          <div>Masculinity AI</div>
        </a>
      </>
    case "Contact":
      return <>
        <a href="mailto:manfongcheung74@gmail.com" target="_blank" rel="noopener noreferrer" className="w-fit ml-auto">
          <div>Email</div>
        </a>
        <a href="https://www.linkedin.com/in/felixmanfc24" target="_blank" rel="noopener noreferrer" className="w-fit ml-auto">
          <div>LinkedIn</div>
        </a>
        <a href="https://github.com/FelixManFongCheung" target="_blank" rel="noopener noreferrer" className="w-fit ml-auto">
          <div>GitHub</div>
        </a>
      </>
    default:
      return <div></div>
  }
}
