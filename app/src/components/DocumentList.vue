<template>
  <div v-for="document in documentList">
    <Document :document="document" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { DocumentItem } from "../types/document.types";
import Document from "./Document.vue";

const documents: Array<DocumentItem> = [
  {
    name: "Document one",
    owner: "Lewandy dilone",
    description: "Description",
    isSigned: false,
  },
  {
    name: "Document two",
    owner: "Lewandy dilone",
    description: "Description",
    isSigned: false,
  },
  {
    name: "Document tree",
    owner: "Lewandy dilone",
    description: "Description",
    isSigned: false,
  },
];

export default defineComponent({
  name: "DocumentList",
  setup() {
    const documentList = ref<Array<DocumentItem>>([]);

    onMounted(() => {
      documentList.value = documents;
    });

    return {
      documentList,
    };
  },
  components: { Document },
});
</script>

<style lang="scss" scoped></style>
