<template>
  <div class="li-box">
    11111
    <div class="li-box__text">22222</div>
    <div class="li-box--footer">33333</div>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="scss">
@include b(box) {
  color: red;
  @include e(text) {
    color: green;
  }
  @include m(footer) {
    color: blueviolet;
  }
}
</style>
