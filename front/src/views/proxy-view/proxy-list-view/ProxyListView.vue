<template>
    <a-table :dataSource="dataSource" :columns="columns" />
</template>
<script setup>
const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
]

const columns = [
    {
        title: 'Код',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Номер',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: 'Дата выписки',
        dataIndex: 'dischargeDate',
        key: 'dischargeDate',
    },
    {
        title: 'Дата окончания',
        dataIndex: 'endDate',
        key: 'endDate',
    },
    {
        title: 'Физ. лицо',
        individualId: 'endDate',
    },
    {
        title: 'Организация',
        organizationId: 'endDate',
    },
    {
        title: 'Действия',
        key: 'actions',
    }
]
</script>
