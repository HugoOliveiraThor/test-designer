<template>
  <section>
    <span>Informações gerais</span>
    <p>
      O alinhamento vertical de todos os itens deve respeitar o limite de página estipulado no
      layout, de acordo com o tamanho das colunas e gutter, sendo que os controles de fazenda e
      safra e o botão de voltar devem respeitar o espaçamento de 16px, não o alinhamento restrito às
      colunas.
    </p>
    <span class="valor">Tela apenas conteúdo</span>
    <p>
      Quando a tela possuir apenas conteúdo textual e botão de ação, não deve ser usado fundo
      branco. O espaçamento superior deve se manter 45px e o espaçamento entre os componentes deve
      ser 40px.
    </p>
    <img :src="first" /> <span>Tela apenas conteúdo</span>
    <p>
      Quando houver grid com itens em list, o box branco deve ser utilizado para dar unidade e
      destaque para os componentes da grid. Aqui o espaçamento superior se mantém 45px, bem como o
      espaçamento entre os componentes se mantém 40px, enquanto o padding interno do box deve ser
      20px.
    </p>
    <img :src="second" /> <span>Tela apenas conteúdo</span>
    <p>
      Quando a grid for composta apenas por cards, não é necessário o uso do box branco. Nesse caso
      o espaçamento superior e entre os primeiros componentes se mantém 45px e 40px, enquanto os
      componentes do grid utilizam 20px para garantir boa proximidade e unidade do componente. O
      alinhamento vertical dos cards varia de acordo com a quantidade de conteúdo e espaçamento do
      layout.
    </p>
    <img :src="third" /> <span>Cenário com botão voltar</span>
    <p>
      Em qualquer cenário que for utilizado o botão voltar, os espaçamentos horizontais se mantém os
      mesmos. Enquanto isso, o botão é alinhado no lugar do título com espaçamento de 16px entre os
      componentes.
    </p>
    <img :src="four" />
  </section>
</template>
<script>
import first from "@/assets/img/1.gif"
import second from "@/assets/img/2.gif"
import third from "@/assets/img/3.gif"
import four from "@/assets/img/4.gif"

export default {
  name: "Padroes",
  data() {
    return {
      first: first,
      second: second,
      third: third,
      four: four,
    }
  },
}
</script>
<style scoped>
span {
  padding-top: 10px;
  font-size: 24px;
  font-weight: 600;
}
</style>

<docs>
  ```jsx
  <padroes/>
  ```
</docs>
