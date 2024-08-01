<template>
    <a-menu v-model:selectedKeys="current" mode="horizontal" theme="dark" :items="items" />
</template>
<script setup>
import { h, ref } from 'vue';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons-vue';
import { ROUTE_PATHS } from '@/utils/routes';
console.log(ROUTE_PATHS.organizations);
const current = ref(['docks']);
const items = ref([
    {
        key: 'docks',
        icon: () => h(MailOutlined),
        label: 'Документы',
        title: 'Документы',
        children: [
            {
                key: '',
                title: 'Доверенность',
                label: h(
                    'a',
                    {
                        href: ROUTE_PATHS.proxy.list,
                    },
                    'Документ: Доверенность',
                ),
            },
            {
                key: '',
                title: 'Счет-фактура',
                label: h(
                    'a',
                    {
                        href: ROUTE_PATHS.stud.list,
                    },
                    'Документ: Счет-фактура',
                ),
            },
        ]
    },
    {
        key: 'app',
        icon: () => h(AppstoreOutlined),
        label: 'Справочники',
        title: 'Справочники',
        children: [
            {
                key: '',
                title: 'Физические лица',
                label: h(
                    'a',
                    {
                        href: ROUTE_PATHS.individuals,
                    },
                    'Физические лица',
                ),
            },
            {
                key: '',
                title: 'Организации',
                label: h(
                    'a',
                    {
                        href: ROUTE_PATHS.organizations,
                    },
                    'Организации',
                ),
            },
            {
                key: '',
                title: 'Товары',
                label: h(
                    'a',
                    {
                        href: ROUTE_PATHS.products,
                    },
                    'Товары',
                ),
            },
            {
                key: '',
                title: 'Покупатели',
                label: h(
                    'a',
                    {
                        href: ROUTE_PATHS.pocupatels,
                        // target: '_blank',
                    },
                    'Покупатели',
                ),
            },
            {
                key: '',
                title: 'Адреса',
                label: h(
                    'a',
                    {
                        href: ROUTE_PATHS.selladresss,
                        // target: '_blank',
                    },
                    'Адреса',
                ),
            },
        ]
    },
]);
</script>