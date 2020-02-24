<template>
    <div style="width: 400px">
      <el-form>
        <el-input></el-input>

      </el-form>
    </div>
</template>

<script>
import { LoginUrl } from '../services/getData';

export default {
  name: 'login',
  data() {
    return {

    };
  },
  mounted() {
    LoginUrl({ username: 'admin', pwd: 1234 }).then((ret) => {
      const { token } = ret;
      console.log(ret);
      localStorage.setItem('token', token);
    });
  },
  methods: {

  },
};
</script>

<style scoped>

</style>
