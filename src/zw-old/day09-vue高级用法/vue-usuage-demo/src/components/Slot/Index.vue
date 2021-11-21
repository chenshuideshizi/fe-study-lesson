<template>
  <div>
    <el-dialog title="弹窗标题">
      <template v-slot:default="contentInfo">
         <div>这是弹窗内容</div>
         <div>{{ contentInfo }}</div>
         <!-- <div>{{ title }}</div> -->
      </template>
     
      <template v-slot:footer="footerSlotProps">
        <div>footer</div>
        <div>{{ footerSlotProps }}</div>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import Dialog from './Dialog'
export default {
  components: {
    ElDialog: Dialog,
  }
}
</script>