<template>
  <NuxtPage />
</template>

<script setup>
import { projectSettings } from '@redneckz/wildless-cms-uni-blocks/lib/ProjectSettings';
import { projectSettings as projectSettingsMobile } from '@redneckz/wildless-cms-uni-blocks/mobile/lib/ProjectSettings';
import wlc from './.wlc.json';

projectSettings.setup(wlc);
projectSettingsMobile.setup(wlc);
</script>

<style>
@import '@redneckz/wildless-cms-uni-blocks/lib/common.css';
</style>
