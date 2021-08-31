import React, { useState, useCallback } from 'react'
import { Button } from 'antd'
import { DraggableModal, DraggableModalProvider } from 'ant-design-draggable-modal'
import 'antd/dist/antd.css'
import 'ant-design-draggable-modal/dist/index.css'
 
const ModalWithButton = () => {
    const [visible, setVisible] = useState(false)
    const onOk = useCallback(() => setVisible(true), [])
    const onCancel = useCallback(() => setVisible(false), [])
    return (
        <>
            <Button onClick={onOk}>Open</Button>
            <DraggableModal visible={visible} onOk={onOk} onCancel={onCancel}>
                Body text.
            </DraggableModal>
        </>
    )
}
 
// DraggableModalProvider manages the zIndex
// of DraggableModals rendered beneath it.
export const MyDialog = () => (
    <DraggableModalProvider>
        <ModalWithButton />
        <ModalWithButton />
        <ModalWithButton />
    </DraggableModalProvider>
)