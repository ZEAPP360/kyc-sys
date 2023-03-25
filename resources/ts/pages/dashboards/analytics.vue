<script setup lang="ts">
import AnalyticsActivityTimeline from '@/views/dashboard/analytics/AnalyticsActivityTimeline.vue'
import AnalyticsCongratulationsJohn from '@/views/dashboard/analytics/AnalyticsCongratulationsJohn.vue'
import AnalyticsOverviewRadialBarCharts from '@/views/dashboard/analytics/AnalyticsOverviewRadialBarCharts.vue'
import AnalyticsPerformance from '@/views/dashboard/analytics/AnalyticsPerformance.vue'
import AnalyticsProjectStatistics from '@/views/dashboard/analytics/AnalyticsProjectStatistics.vue'
import AnalyticsSalesCountry from '@/views/dashboard/analytics/AnalyticsSalesCountry.vue'
import AnalyticsTopReferralSources from '@/views/dashboard/analytics/AnalyticsTopReferralSources.vue'
import AnalyticsTotalProfitLineCharts from '@/views/dashboard/analytics/AnalyticsTotalProfitLineCharts.vue'
import AnalyticsTotalRevenueBarCharts from '@/views/dashboard/analytics/AnalyticsTotalRevenueBarCharts.vue'
import AnalyticsTotalTransactions from '@/views/dashboard/analytics/AnalyticsTotalTransactions.vue'
import AnalyticsVisitsByDay from '@/views/dashboard/analytics/AnalyticsVisitsByDay.vue'
import AnalyticsWeeklySales from '@/views/dashboard/analytics/AnalyticsWeeklySales.vue'
</script>

<template>
  <VRow class="match-height">
    <!-- 👉 Congratulations John -->
    <VCol
      cols="12"
      md="8"
      lg="8"
    >
      <AnalyticsCongratulationsJohn />
    </VCol>

    <!-- 👉 Vertical Cards -->
    <VCol
      cols="12"
      sm="6"
      md="2"
      lg="2"
    >
      <CardStatisticsVertical
        v-bind="{
          title: 'Total Signups',
          color: 'primary',
          icon: 'mdi-cart-plus',
          stats: '155k',
          change: 22,
          subtitle: 'Last 4 Month',
        }"
      />
    </VCol>

    <!--  👉 Sessions line chart -->
    <VCol
      cols="12"
      sm="6"
      md="2"
      lg="2"
    >
      <AnalyticsTotalProfitLineCharts />
    </VCol>

    <!-- 👉 Weekly Sales -->
    <VCol
      cols="12"
      md="6"
      sm="6"
    >
      <AnalyticsWeeklySales />
    </VCol>

    <!-- 👉 Visits by Day -->
    <VCol
      cols="12"
      md="6"
      sm="6"
    >
      <AnalyticsVisitsByDay />
    </VCol>

    <!-- 👉 Activity Timeline -->
    <VCol
      cols="12"
      md="8"
    >
      <AnalyticsActivityTimeline />
    </VCol>
    

    <!-- 👉 Performance Chart -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <AnalyticsPerformance />
    </VCol>




  </VRow>
</template>

<style lang="scss">
@use "@core-scss/template/libs/apex-chart.scss";
</style>
