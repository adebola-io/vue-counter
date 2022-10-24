<template>
   <footer>
      Built By
      <a target="_blank" href="http://github.com/adebola-io">@adebola-io</a>
   </footer>
</template>

<script>
export default {
   name: "AppFooter",
};
</script>

<style scoped>
footer {
   position: fixed;
   bottom: 0;
   right: 0;
   margin: 0 3vh 3vh 0;
   color: #7c7c7c;
   font-size: 10pt;
}
a {
   text-decoration: none;
   color: black;
}
</style>
