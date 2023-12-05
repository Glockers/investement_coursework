/* eslint-disable @typescript-eslint/ban-types */
import { Button, Form, Input, Modal } from 'antd';
import { ReactElement, useState } from 'react';
import { PanelContent } from './PanelManagerNews.style';
import { Controller, useForm } from 'react-hook-form';

export const PanelManagerNews = (): ReactElement => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const { control, handleSubmit, register, getValues } = useForm();

  const showModal = (func: Function) => {
    func(true);
  };

  const handleCancel = (func: Function) => {
    func(false);
  };

  const handleOk = (handler: Function, fnClose: Function) => {
    setLoading(true);
    handler();
    setTimeout(() => {
      setLoading(false);
      fnClose(false);
    }, 3000);
  };

  const handleAdd = (data) => {
    const values = getValues();
    console.log(values);
  };

  const handleUpdate = () => {
    console.log('handleUpdate');
  };

  const handleDelete = () => {
    console.log('handleDelete');
  };

  const handleFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <PanelContent>
        <Button type="primary" onClick={() => showModal(setOpenAdd)}>
          Добавить статью
        </Button>

        <Button type="primary" onClick={() => showModal(setOpenUpdate)}>
          Изменить
        </Button>

        <Button type="primary" onClick={() => showModal(setOpenDelete)}>
          Удалить
        </Button>
      </PanelContent>

      <Modal
        open={openAdd}
        title="Добавление новости"
        onCancel={() => handleCancel(setOpenAdd)}
        footer={[
          <Button key="back" onClick={() => handleCancel(setOpenAdd)}>
            Закрыть
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleAdd}
          >
            Сохранить
          </Button>
        ]}
      >
        <Form>
          <Form.Item name="title" style={{ marginBottom: 2, width: '100%' }}>
            <Controller
              name="title"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  width={'100%'}
                  placeholder="Заголовок новости"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </Form.Item>
          <Form.Item name="text" style={{ marginBottom: 2, width: '100%' }}>
            <Controller
              name="text"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  width={'100%'}
                  placeholder="текст новости"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </Form.Item>
        </Form>
      </Modal>

      {/* <Modal
        open={openUpdate}
        title="Обновлене новости"
        onOk={() => handleOk(handleUpdate, setOpenUpdate)}
        onCancel={() => handleCancel(setOpenUpdate)}
        footer={[
          <Button key="back" onClick={() => handleCancel(setOpenUpdate)}>
            Закрыть
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={() => handleOk(handleUpdate, setOpenUpdate)}
          >
            Обновить
          </Button>
        ]}
      >
        <Input placeholder="Название статьи" />
        <Input placeholder="Описание статьи" />
      </Modal>

      <Modal
        open={openDelete}
        title="Удаление новости"
        onOk={() => handleOk(handleDelete, setOpenDelete)}
        onCancel={() => handleCancel(setOpenDelete)}
        footer={[
          <Button key="back" onClick={() => handleCancel(setOpenDelete)}>
            Закрыть
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={() => handleOk(handleDelete, setOpenDelete)}
          >
            Удалить
          </Button>
        ]}
      >
        <Input placeholder="Номер статьи" />
      </Modal> */}
    </>
  );
};
