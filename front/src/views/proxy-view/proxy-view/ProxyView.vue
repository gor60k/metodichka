<template>
    <div style="padding: 16px">
        <div ref="componentRef">
            <a-space direction="vertical" align="center" style="width: 100%; margin-bottom: 24px">
                <h2>Доверенность № <strong>{{ proxy?.number }}</strong></h2>

                <a-space>Дата выписки
                    <a-date-picker format="DD.MM.YYYY" v-model="proxy.dischargeDate"
                        @change="updateProxy('dischargeDate', $event)" style="width: 232px" allow-clear="false" />
                </a-space>

                <a-space>Дата действия
                    <a-date-picker format="DD.MM.YYYY" v-model="proxy.endDate" @change="updateProxy('endDate', $event)"
                        style="width: 232px" allow-clear="false" />
                </a-space>

                <a-space>Доверенность выдана: <strong>
                        <a-select v-model="proxy.organizationId" @change="updateProxy('organizationId', $event)"
                            placeholder="Выберите организацию" style="width: 425px">
                            <a-select-option v-for="organization in organizations" :key="organization.id"
                                :value="organization.id">
                                {{ organization.title }}
                            </a-select-option>
                        </a-select>
                    </strong></a-space>

                <a-space>Получатель: <strong>
                        <a-select v-model="proxy.individualId" @change="updateProxy('individualId', $event)"
                            placeholder="Выберите получателя" style="width: 425px">
                            <a-select-option v-for="individual in individuals" :key="individual.id"
                                :value="individual.id">
                                {{ individual.lastName }} {{ individual.firstName }} {{ individual.patronymic }}
                            </a-select-option>
                        </a-select>
                    </strong></a-space>
            </a-space>

            <a-table :data-source="list" :columns="columns" />
        </div>

        <a-space>
            <a-button @click="createRecordHandler">
                Создать
            </a-button>
            <a-button type="dashed" @click="handlePrint">
                Печать
            </a-button>
        </a-space>

        <ProxyBodiesDialog :visible="visible" @ok="handleOk" @cancel="handleCancel" :current-record="currentRecord"
            :products="products" :proxy-header-id="id" />
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
// import { DatePicker, Button, Space, Table, Select } from 'ant-design-vue';
// import { EditOutlined, DeleteOutlined } from '@ant-design/icons-vue';
import { useRoute } from 'vue-router';
import ProxyBodyService from '../../../api/services/proxy-body-service';
import ProxyHeadersService from '../../../api/services/proxy-header-service';
import OrganizationService from '../../../api/services/organization-service';
import IndividualService from '../../../api/services/individuals-service';
import ProductService from '../../../api/services/product-service';
import ProxyBodiesDialog from '../../../components/dialogs/proxy-bodies-dialog/ProxyBodiesDialog.vue';
import { useReactToPrint } from 'react-to-print';

export default {
    components: {
        ProxyBodiesDialog,
    },
    setup() {
        const columns = ref([
            {
                title: 'Код',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: 'Наименование',
                key: 'title',
                render: (text, record) => products.value.find(it => it.id === record.productId)?.title,
            },
            {
                title: 'ед. изм.',
                dataIndex: 'unit',
            },
            {
                title: 'Количество',
                dataIndex: 'count',
            },
            {
                title: 'Действия',
                key: 'actions',
                // render: (text, record) => (
                //     <a-space size="middle">
                //         <div onClick={() => updateRecordHandler(record)}>
                //             <EditOutlined />
                //         </div>
                //         <div onClick={() => deleteRecordHandler(record.id)}>
                //             <DeleteOutlined />
                //         </div>
                //     </a-space>
                // ),
            },
        ]);

        const componentRef = ref(null);
        const handlePrint = useReactToPrint({
            content: () => componentRef.value,
        });

        const route = useRoute();
        const id = route.params.id;

        const proxy = ref(null);
        const list = ref([]);
        const individuals = ref([]);
        const organizations = ref([]);
        const products = ref([]);
        const currentRecord = ref(null);
        const visible = ref(false);

        onMounted(async () => {
            const listResponse = await ProxyBodyService.getAllHeadersRecords(id);
            const individualsResponse = await IndividualService.getAllRecords();
            const organizationsResponse = await OrganizationService.getAllRecords();
            const productsResponse = await ProductService.getAllRecords();
            const proxyResponse = await ProxyHeadersService.getOneRecord(id);

            list.value = listResponse;
            proxy.value = proxyResponse;

            individuals.value = individualsResponse;
            organizations.value = organizationsResponse;
            products.value = productsResponse;
        });

        const createRecordHandler = () => {
            currentRecord.value = null;
            visible.value = true;
        };

        const updateRecordHandler = (record) => {
            currentRecord.value = record;
            visible.value = true;
        };

        const deleteRecordHandler = async (recordId) => {
            await ProxyBodyService.removeRecord(recordId);
            list.value = list.value.filter(it => it.id !== recordId);
        };

        return {
            columns,
            componentRef,
            handlePrint,
            id,
            proxy,
            list,
            individuals,
            organizations,
            products,
            currentRecord,
            visible,
            createRecordHandler,
            updateRecordHandler,
            deleteRecordHandler,
        };
    },
};
</script>