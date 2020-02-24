<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="validateLoginStatus" type="primary">
      验证
    </el-button>
  </div>

</template>


<script>
import { TestUrl, ValidateUrl } from '../services/getData';

export default {
  name: 'About',
  data() {
    return {};
  },
  mounted() {
    const ret = TestUrl();
    console.log(134);
    console.log(ret);
  },
  methods: {
    validateLoginStatus() {
      const res = ValidateUrl();
    },
  },
};

</script>
