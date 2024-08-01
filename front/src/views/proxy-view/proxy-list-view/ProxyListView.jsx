import { Button, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import OrganizationService from "../../../api/services/organization-service";
import ProxyHeadersService from "../../../api/services/proxy-header-service";
import IndividualService from "../../../api/services/individuals-service";
import { ProxyHeadersDialog } from "../../../components/dialogs/proxy-headers-dialog/ProxyHeadersDialog";


export const ProxyListView = ({
    ...props
}) => {
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
            render: (text, record) => individuals.find(it => it.id === record.individualId)?.lastName,
        },
        {
            title: 'Организация',
            organizationId: 'endDate',
            render: (text, record) => organizations.find(it => it.id === record.organizationId)?.title,
        },
        {
            title: 'Действия',
            key: 'actions',
            render: (text, record) => {
                return (
                    <Space size="middle">
                        <div onClick={() => updateRecordHandler(record)}>
                            <EditOutlined />
                        </div>
                        <div onClick={() => deleteRecordHandler(record.id)}>
                            <DeleteOutlined />
                        </div>
                    </Space>
                )
            }
        }
    ];

    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const [currentRecord, setCurrentRecord] = useState(null);
    const [visible, setVisible] = useState(false);

    const [individuals, setIndividuals] = useState([]);
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const individuals = await IndividualService.getAllRecords();
          const organizations = await OrganizationService.getAllRecords();
          const list = await ProxyHeadersService.getAllRecords();   //CAS   
          setIndividuals(individuals);
          setOrganizations(organizations);
          setList(list);
        } catch (res) {
          // Обработка ошибок, например, вывод сообщения об ошибке или запись в лог
          alert("Произошла ошибка:", res);
        }
      };
    
      fetchData();
    
      // Уберите return, так как он не требуется в данном случае
    }, []);
    console.log(list);

    const createRecordHandler = () => {
        setCurrentRecord(null)
        setVisible(true);
    }

    const updateRecordHandler = (record) => {
        setCurrentRecord(record)
        setVisible(true)
    }

    const deleteRecordHandler = async (recordId) => {
        await ProxyHeadersService.removeRecord(recordId);
        setList(list.filter(it => it.id !== recordId));
    }

    return (
        <div style={{ padding: 16 }}>
    <Table
        dataSource={list}
        columns={columns}
        onRow={(record, rowIndex) => ({
            onDoubleClick: event => {
                navigate(`/proxy/${record.id}`);
            },
        })}
    />
            <Button onClick={createRecordHandler}>
                Создать
            </Button>
            <ProxyHeadersDialog
                visible={visible}
                onOk={(record) => {
                    currentRecord
                        ? setList(list.map(it => it.id === currentRecord.id
                            ? { ...record }
                            : it))
                        : setList([...list, record]);

                    setCurrentRecord(null);
                    setVisible(false);
                }}
                onCancel={() => setVisible(false)}
                currentRecord={currentRecord}
                individuals={individuals}
                organizations={organizations}
                
            />
        </div>
    )
}