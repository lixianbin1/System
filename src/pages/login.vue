<script setup lang="ts">
import type { FormInstance } from 'element-plus'
const ruleFormRef = ref<FormInstance>()
const { t } = useI18n()
const state = reactive({
  // 判断登录还是重置密码状态
  loading: false,
  type: 'login', // login or change
  form: { // 登录请求数据
    ptCode: 'CP001',
    username: 'admin',
    password: '12345678',
  },
})
// 修改密码
const change = reactive({
  newPwd: '',
  newsPwd: '',
  oldPwd: state.form.password,
})
watch(() => state.form.password, (newPassword) => {
  change.oldPwd = newPassword
})
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '')
    callback(new Error('Please input the password again'))

  else if (value !== change.newPwd)
    callback(new Error('Two inputs don\'t match!'))

  else
    callback()
}
const rules = reactive({
  newPwd: [
    { required: true, message: 'Please input new password', trigger: 'blur' },
    { min: 8, max: 16, message: 'Length should be 8 to 16', trigger: 'blur' },
  ],
  newsPwd: [{ validator: validatePass2, trigger: 'blur' }],
})
const onSubmit = (formEl: FormInstance | undefined) => {
  console.log(formEl)
  if (!formEl)
    return
  formEl.validate((valid) => {
    if (valid)
      upToPassword()

    else
      return false
  })
}
const upToPassword = () => {

}

// 登录账户
const router = useRouter()
const onLogin = () => {
  router.push('./')
}

// 修改密码，返回
const switching = (type: string) => {
  state.loading = true
  setTimeout(() => {
    state.loading = false
  }, 800)
  setTimeout(() => {
    state.type = type
  }, 400)
}
</script>

<template>
  <el-container id="login">
    <el-header class="header">
      <h1 class="title">
        {{ t('login.Welcome') }}
      </h1>
      <div class="lang">
        <LanguageButton />
      </div>
    </el-header>
    <el-main class="main">
      <div class="login_box" :class="{ switching: state.loading }">
        <el-form v-show="state.type == 'change'" ref="ruleFormRef" :model="change" :rules="rules">
          <el-form-item>
            <h2 class="title">
              {{ t('login.Change') }}
            </h2>
          </el-form-item>
          <el-form-item prop="newPwd">
            <el-input v-model="change.newPwd" type="password" show-password :placeholder="t('login.NewPassword')">
              <template #prefix>
                <el-icon i-carbon:password />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="newsPwd">
            <el-input v-model="change.newsPwd" type="password" show-password :placeholder="t('login.confirm')">
              <template #prefix>
                <el-icon i-carbon:password />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="width: 100%;" type="primary" @click="onSubmit(ruleFormRef)">
              {{ t('login.Submit') }}
            </el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="info" link @click="switching('login')">
              {{ t('login.Goback') }}
            </el-button>
          </el-form-item>
        </el-form>

        <el-form v-show="state.type == 'login'" ref="form" :model="state.form">
          <el-form-item>
            <h2 class="title">
              {{ t('login.Account') }}
            </h2>
          </el-form-item>
          <el-form-item>
            <el-input v-model="state.form.ptCode" :placeholder="t('login.EnterMember')">
              <template #prefix>
                <el-icon i-carbon:user-avatar />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="state.form.username" :placeholder="t('login.EnterAccount')">
              <template #prefix>
                <el-icon i-carbon:user-avatar />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="state.form.password" type="password" show-password :placeholder="t('login.EnterPassword')">
              <template #prefix>
                <el-icon i-carbon:password />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="width: 100%;" type="primary" @click="onLogin">
              {{ t('login.Login') }}
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
    <el-footer>
      <div>
        <span>{{ t('login.FontTitle') }}</span>
      </div>
    </el-footer>
  </el-container>
</template>

<route lang="yaml">
meta:
  layout: login
</route>

<style scoped lang="scss">
#login{
  height: 100vh;
  .header{
    display: flex;align-items: center;
    .title{
      flex:1;
      font-size: 18px;
      font-weight: bold;
    }
    .lang{
      flex:1;
      display: flex;
      justify-content: end;
    }
  }
  .main{
    background-image:url("/src/assets/images/background.jpg");
    background-size: cover;
    .login_box{
      width: 450px;
      position: absolute;
      top: 50%;
      right: 110px;
      margin-top: -200px;
      border: 1px solid #ccc;
      padding: 50px;
      background: #fff;
      .title{
        font-size: 20px;
      }
    }
  }
}

@keyframes flip {
  0% {
    transform: perspective(2000px) rotateY(0)
  }
  100% {
    transform: perspective(2000px) rotateY(90deg)
  }
}
@keyframes flip_out {
  0% {
    transform: perspective(2000px) rotateY(-90deg)
  }
  100% {
    transform: perspective(2000px) rotateY(0)
  }
}
.switching {
  -webkit-transform: perspective(2000px) rotateY(-90deg);
  -webkit-animation: flip .4s linear,flip_out .4s .41s linear;
  transform: perspective(2000px) rotateY(-90deg);
  animation: flip .4s linear,flip_out .4s .41s linear
}
</style>
