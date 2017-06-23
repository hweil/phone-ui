<template>
  <button
    class="phone-button"
    :disabled="disabled"
    :class="['phone-button--'+type,'phone-button--'+size,{
      'is-disabled':disabled
      }]"
    @click="handleClick">
    <span v-if="icon || $slots.icon" class="phone-button-icon">
    <slot name="icon">
      <i v-if="icon" class="phoneui" :class="'phoneui--'+icon" />
    </slot>
  </span>
  <span class="phone-button-text"><slot></slot></span>
  </button>
</template>

<script>
  export default {
    name: 'ph-button',
    props: {
      icon: String,
      disabled: Boolean,
      type: {
        type: String,
        default: 'default',
        validator(value) {
          return ['default', 'primary'].indexOf(value) > -1
        }
      },
      size: {
        type: String,
        default: 'normal',
        validator(value) {
          return ['small', 'normal', 'large'].indexOf(value) > -1
        }
      }
    },
    created() {
    },
    methods: {
      handleClick: function(ev) {
        this.$emit('click', ev)
      }
    }
  }
</script>

<style lang="css">
  @component-namespace phone{
    @component button {
      appearance: none;
      height: 41px;
      display: block;
      border-radius: 4px;
      border:0;
      outline: none;

      &:after{
        background-color: #000;
        content: ' ';
      }
      &:active{
        background: red;
        color: #FFF;
      }
      @descendent icon{
        vertical-align: middle;
        display: inline-block;
      }

      @modifier danger{
        color: red;
      }
      @modifier small{
        display: inline-block;
        padding: 0 12px;
      }
      @modifier normal{
        display: inline-block;
        padding: 0 12px;
      }
      @modifier large {
        display: block;
        width: 100%;
      }

      @when disabled{
        opacity: .6;
      }
    }
  }
</style>
