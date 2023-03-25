<script setup lang="ts">
import trophy from '@images/misc/trophy.png'
</script>

<template>
  <div>
    <VCard>
        <VCardItem class="pb-2">
          <VCardTitle class="text-wrap">
            <span class="me-1">Congratulations </span><strong class="me-1">Norris!</strong><span>🎉</span>
          </VCardTitle>
          <span class="text-sm">Best seller of the month</span>
        </VCardItem>

        <VCardText>
          <h5 class="text-2xl font-weight-semibold text-primary">
            $42.8k
          </h5>
          <p>78% of target 🤟🏻</p>

          <VBtn size="small">
            View Sales
          </VBtn>
        </VCardText>

        <!-- Trophy -->
        <VImg
          :src="trophy"
          class="trophy flip-in-rtl"
        />
    </VCard>
    <VCard
      class="mb-6"
      title="Kick start your project 🚀">
      <VCardText>All the best for your new project.</VCardText>
      <VCardText>
        Please make sure to read our <a
          href="https://pixinvent.com/demo/materialize-vuejs-admin-dashboard-template/documentation/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-decoration-none"
        >
          Template Documentation
        </a> to understand where to go from here and how to use our template.
      </VCardText>
    </VCard>

    <VCard title="Want to integrate JWT? 🔒">
      <VCardText>We carefully crafted JWT flow so you can implement JWT with ease and with minimum efforts.</VCardText>
      <VCardText>Please read our  JWT Documentation to get more out of JWT authentication.</VCardText>
    </VCard>
  </div>
</template>


<style lang="scss">
.trophy {
  position: absolute;
  inline-size: 6.625rem;
  inset-block-end: 0;
  inset-inline-end: 1rem;
}
</style>

