<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p A continuación, se describe el tema principal del Componente formativo CF04 identificación de componentes electrónicos, donde se describe cada uno de ellos, el diseño eléctrico y electrónico dependiendo de las características y sus órdenes de trabajo. También se contemplan y desarrollan temas acerca de la conformación de los circuitos y su vital importancia e implementación en los diferentes procesos de fabricación y operación de los productos.

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
