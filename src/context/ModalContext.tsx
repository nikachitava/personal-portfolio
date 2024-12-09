import { IModalContextTypes } from "@/types/IModalContextTypes";
import { createContext, ReactNode, useState } from "react";

const MODAL_CONTEXT_DEFAULT_VALUES = {
	isModalOpen: false,
	toggleModal: () => {},
};

export const ModalContext = createContext<IModalContextTypes>(
	MODAL_CONTEXT_DEFAULT_VALUES
);

const ModalContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen((isModalOpen) => !isModalOpen);
	};

	return (
		<ModalContext.Provider value={{ isModalOpen, toggleModal }}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContextProvider;
