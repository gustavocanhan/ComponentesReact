export default function About() {
  return (
    <div className="md:w-4xl mx-auto md:px-8 px-4 pb-20">
      <h1 className="text-4xl font-medium pt-12 pb-8">About</h1>
      <div className="space-y-4 md:border md:border-muted-foreground/10 md:shadow md:p-8 md:rounded-md">
        <p>
          Este projeto nasceu de um problema comum no desenvolvimento de
          aplicações React recriar os mesmos componentes em todo novo projeto.
        </p>

        <p>
          Em quase todos os trabalhos, eu acabava repetindo o mesmo processo:
        </p>
        <ul className="list-disc list-inside">
          <li>montar botões, modais, tabelas, formulários, layouts básicos</li>
          <li>ajustar estilos</li>
          <li>testar variações</li>
          <li>refazer decisões que já haviam sido tomadas anteriormente.</li>
        </ul>

        <p>
          Com o tempo, percebi que não estava reaproveitando soluções que já
          funcionavam e que isso consumia horas desnecessárias a cada novo
          projeto.
        </p>

        <p>
          A partir disso, surgiu a ideia de criar este site como uma{" "}
          <b>referência pessoal de componentes React.</b>
        </p>

        <p>
          Aqui, a proposta não é fornecer uma biblioteca para instalação, nem
          impor uma API, dependências ou abstrações rígidas.
        </p>

        <p>
          Em vez disso, o projeto funciona como um catálogo de componentes
          isolados, onde cada item é apresentado de forma clara e prática.
        </p>

        <p>Cada componente possui:</p>
        <ul className="list-disc list-inside">
          <li>demonstração visual</li>
          <li>código completo</li>
          <li>estrutura explícita</li>
          <li>estilo consistente</li>
        </ul>

        <p>
          O foco é permitir que o código seja copiado, entendido, adaptado e
          evoluído, de acordo com a necessidade de cada projeto.
        </p>

        <p>
          Inspirado no estilo do shadcn, o design prioriza simplicidade, clareza
          e controle total do código. Nada de soluções mágicas ou dependências
          escondidas apenas padrões bem definidos,pensados para uso real em
          projetos de produção.
        </p>

        <p>
          Este repositório funciona como um ponto central onde posso consultar
          padrões de layout, estrutura e estilo que já foram testados e
          funcionam bem.
        </p>

        <p>
          Ele é usado como base para acelerar novos projetos, manter
          consistência visual entre diferentes aplicações e evitar retrabalho.
        </p>

        <p>
          Mais do que um conjunto de componentes, este site representa uma
          mudança de abordagem.
        </p>

        <ul className="list-disc list-inside">
          <li>parar de começar do zero</li>
          <li>reduzir a dependência de buscas externas</li>
          <li>ter uma referência prática, própria e confiável.</li>
        </ul>

        <p>
          É um projeto em constante evolução, assim como os projetos que ele
          ajuda a construir.
        </p>
      </div>
      <h2 className="pt-12 text-2xl font-medium pb-8">Github</h2>
      <div className="bg-zinc-800 px-4 py-8 rounded-md shadow overflow-auto">
        <p className="text-md text-green-400 font-mono">
          git clone{" "}
          <a
            href="https://github.com/gustavocanhan/ComponentesReact"
            className="text-orange-500 hover:text-orange-700 transition"
          >
            https://github.com/gustavocanhan/ComponentesReact
          </a>
        </p>
      </div>
    </div>
  );
}
