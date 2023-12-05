/* eslint-disable @typescript-eslint/ban-types */
import { Button, Form, Input, Modal } from 'antd';
import { ReactElement, useState } from 'react';
import { PanelContent } from './PanelManagerNews.style';
import { Controller, useForm } from 'react-hook-form';

export const PanelManagerNews = (): ReactElement => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const { control, getValues, reset } = useForm();

  const showModal = (func: Function) => {
    func(true);
    reset()
  };

  const handleCancel = (func: Function) => {
    func(false);
    reset()
  };

  const handleAdd = () => {
    const values = getValues();
    console.log(values);
    handleCancel(setOpenAdd);
  };

  const handleUpdate = () => {
    const values = getValues();
    console.log(values);
    handleCancel(setOpenUpdate);
  };

  const handleDelete = () => {
    const values = getValues();
    console.log(values);
    handleCancel(setOpenDelete);
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
          <Button key="submit" type="primary" onClick={handleAdd}>
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

      <Modal
        open={openUpdate}
        title="Обновлене новости"
        onCancel={() => handleCancel(setOpenUpdate)}
        footer={[
          <Button key="back" onClick={() => handleCancel(setOpenUpdate)}>
            Закрыть
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={handleUpdate}
          >
            Обновить
          </Button>
        ]}
      >
        <Form>
          <Form.Item name="id" style={{ marginBottom: 2, width: '100%' }}>
            <Controller
              name="id"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  width={'100%'}
                  placeholder="Номер статьи"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </Form.Item>
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

      <Modal
        open={openDelete}
        title="Удаление новости"
        onCancel={() => handleCancel(setOpenDelete)}
        footer={[
          <Button key="back" onClick={() => handleCancel(setOpenDelete)}>
            Закрыть
          </Button>,
          <Button key="submit" type="primary" onClick={handleDelete}>
            Удалить
          </Button>
        ]}
      >
        <Form>
          <Form.Item name="id" style={{ marginBottom: 2, width: '100%' }}>
            <Controller
              name="id"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  width={'100%'}
                  placeholder="Номер статьи"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
