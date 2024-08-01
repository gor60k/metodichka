<template>
    <a-modal :visible="visible" :title="currentRecord ? 'Редактировать' : 'Создать'" @ok="onOkHandler"
        @cancel="onCancel">
        <a-space direction="vertical">
            <a-select v-model="proxyBody.productId" @change="updateProxyBody('productId', $event)"
                placeholder="Выберите продукт" style="width: 100%">
                <a-select-option v-for="product in products" :key="product.id" :value="product.id">
                    {{ product.title }}
                </a-select-option>
            </a-select>

            <a-space>
                <a-input v-model="proxyBody.unit" @change="updateProxyBody('unit', $event.target.value)"
                    placeholder="Укажите ед. измерения" />

                <a-input v-model="proxyBody.count" @change="updateProxyBody('count', $event.target.value)"
                    placeholder="Укажите количество" />
            </a-space>
        </a-space>
    </a-modal>
</template>

<script>
import { ref, onMounted } from 'vue';
// import { useRoute } from 'vue-router';
import ProxyBodyService from '../../../api/services/proxy-body-service';

export default {
    props: {
        visible: Boolean,
        onOk: Function,
        onCancel: Function,
        currentRecord: Object,
        products: Array,
        proxyHeaderId: Number,
    },
    setup(props) {
        const proxyBody = ref({});

        onMounted(() => {
            if (props.currentRecord) {
                proxyBody.value = props.currentRecord;
            } else {
                proxyBody.value = null;
            }
        });

        const updateProxyBody = (field, value) => {
            proxyBody.value[field] = value;
        };

        const onOkHandler = async () => {
            const record = props.currentRecord
                ? await ProxyBodyService.updateRecord({ id: props.currentRecord.id, ...proxyBody.value })
                : await ProxyBodyService.createRecord({ ...proxyBody.value, proxyHeaderId: props.proxyHeaderId });
            props.onOk(record);
        };

        return {
            proxyBody,
            updateProxyBody,
            onOkHandler,
        };
    },
};
</script>