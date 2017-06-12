<template>
  <div class="page-button">
    <h1 class="page-title">Button</h1>
    <div class="page-button-group">
      <ph-button size="large">default</ph-button>
      <ph-button size="large" type="primary">primary</ph-button>
      <ph-button size="large" type="danger">danger</ph-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'button'
}
</script>

<style lang="css">
  @component-namespace page {
    @component button {
      padding: 0 15px 15px;

      @descendent group {
        margin-bottom: 15px;

        & > * {
          margin-bottom: 15px;
        }
      }
    }
  }
</style>
