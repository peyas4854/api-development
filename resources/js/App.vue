<template>
    <div>
        <router-view />
    </div>
</template>
<script>
import adminlayout from "./components/layouts/AdminLayout";
import frontlayout from "./components/layouts/FrontLayout";
export default {
    props: ["user"],
    components: {
        adminlayout,
        frontlayout
    },
    created() {
        // if (this.user.userType == "User") {
        //     console.log('user');
        //     this.$router.push({ path: "/home" });
        // }else{
        //      console.log('admin');
        //     this.$router.push({ path: "/dashboard" });
        // }
      
        this.$store.commit("set_User", this.user);
    }
};
</script>

<style></style>
