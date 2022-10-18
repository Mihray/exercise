<template>
    <div class="login">
        <el-card class="box-card">
            <!-- slot="header" -->
            <div  slot="header" class="clearfix">
                <span>通用后台管理系统</span>
            </div>
        <el-form  label-width="80px" :model="form" ref="form">
            <el-form-item label="用户名" prop="userName"
                :rules="[{required:true,maessage:'请输入用户名',trigger:'blur'},
                {min:4,max:10,message:'长度在4-10位字符之间',trigger:'blur'}]">
                <el-input v-model="form.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码"   prop="password"
                :rules="[{required:true,maessage:'请输入密码',trigger:'blur'},
                {min:6,max:12,message:'长度在6-12位字符之间',trigger:'blur'}]">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" @click="login('form')">登录</el-button>
            </el-form-item>
        </el-form>
    </el-card>
    </div>
</template>
<script>
export default {
    data(){
        // const validateName=(rule,value,callback)=>{
        //     //请输入4-10位昵称
        //     let reg=/(^[a-zA-Z9-9]{4,10}$)/
        //     if(value===''){
        //         callback(new Error('请输入用户名'))
        //     }else if(!reg.test(value)){
        //         callback(new Error('请输入4-10位用户名'))
        //     }else{
        //         callback()
        //     }
        // }
        // const validatePass=(rule,value,callback)=>{
        //     //请输入6-12位密码
        //     let pass=/^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/
        //     if(value===''){
        //         callback(new Error('请输入密码'))
        //     }else if(!pass.test(value)){
        //         callback(new Error('请输入6-12位密码'))
        //     }else{
        //         callback()
        //     }
        // }
        return {
            form:{
                userName:'',
                password:'',
            },
            // rules:{
            //     username:[{validator:validateName,trigger:'blur'}],
            //     password:[{validator:validatePass,trigger:'blur'}]
            // }
        }
    },
    methods:{
        //验证
        login(form){
            this.$refs[form].validate((valid)=>{
                if(valid){
                    console.log(this.form)
                    console.log('post', this)
                    this.axios.post('http://111.229.176.245:3000/mtapi/mihray/login',this.form)
                    this.axios.post('/mtapi/mihray/login', {
                                    userName: 'mihray',
                                    password: '123456'
                                },
                                {
                                    userName: 'ming',
                                    password: 'mingmingzi'
                                },
                                {   userName: '王小二',
                                    password: 'iLoveMoney'

                                })
                    .then(res=>{
                        console.log(res)
                        if( res.status===200){
                            localStorage.setItem('userName',res.data.userName)
                            this.$message({message:res.data.message,type:'success'})
                            this.$router.push('/Home')
                            console.log('res的this:',this)
                        }
                    })
                    .catch(err=>{
                        console.error(err)
                    })
                }else{
                    console.error(this.form)
                }
            })
        }
    }
}
</script>
<style scoped>
.login{
    width:100%;
    height:100%;
    position:absolute;
    background:#409EFF;
}
.box-card{
        width:450px;
        margin:200px auto;
    }
    
/* .el-card__haeder{
        font-size:34px;
    }
    .clearfix sapn{
        font-size:34px;
    } */
</style>