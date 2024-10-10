
'use client'

import * as Dialog from '@radix-ui/react-dialog';
import { IconArrowUpRight, IconX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Button } from '~/components/button';
import { brisanetService } from '~/services/brisanet';

const DropdownCity = ({ options, onSelect }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [filteredOptions, setFilteredOptions] = useState(options);

	useEffect(() => {
		if (searchTerm) {
			const filtered = options.filter((option) =>
				option.value.toLowerCase().includes(searchTerm.toLowerCase())
			);
			setFilteredOptions(filtered);
		} else {
			setFilteredOptions(options);
		}
	}, [searchTerm, options]);

	const handleSelection = (city) => {
		setSearchTerm(city.value);
		setIsOpen(false);
	};

	return (
		<div className="w-72 pt-6 md:w-[26.625rem] md:pt-8 relative">
			<div className="flex items-center rounded-lg border px-3 focus-within:border-orange-600 focus-within:border-2 dark:focus-within:border-yellow-200 transition-colors duration-300 ease-in-out">
				<input
					className="peer h-11 w-full appearance-none rounded-md py-3 text-sm outline-none bg-transparent placeholder-transparent focus:border-orange-600"
					placeholder="Digite sua cidade"
					autoComplete="off"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					onFocus={() => setIsOpen(true)}
				/>
				<label
					className={`absolute left-0 top-0 ml-3 transform transition-all duration-300 ease-in-out bg-background px-1 text-sm text-gray-500
            ${searchTerm ? "top-4 text-sm text-orange-600 dark:text-yellow-200 bg-white" : "top-1/2 -translate-y-[-5px] text-base text-gray-500 peer-focus:text-sm peer-focus:text-orange-600 peer-placeholder-shown:text-gray-500"}`}
				>
					Digite sua cidade
				</label>
			</div>

			{isOpen && searchTerm && (
				<ul
					className="absolute z-20 mt-2 w-full rounded-md border border-gray-300 bg-white dark:bg-gray-800 max-h-60 lg:max-h-96 overflow-auto shadow-lg"
				>
					{filteredOptions.length > 0 ? (
						filteredOptions.map((city) => (
							<li
								key={city.id}
								className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
								onClick={() => {
									handleSelection(city)
									onSelect(city)
								}}
							>
								{city.value}
							</li>
						))
					) : (
						<li className="px-4 py-2 text-gray-500">Nenhuma cidade encontrada</li>
					)}
				</ul>
			)}
		</div>
	);
};

export function SelectCityModal({ currentCity, onSelect }) {
	const [isOpen, setIsOpen] = useState(false);
	const [cities, setCities] = useState<{ id?: nunber, name?: string, slug?: string, state?: string }[]>([]);

	useEffect(() => {
		brisanetService.getCoveredCities().then(data => setCities(data));
	}, []);

	const currentCityName = cities?.find?.((city) => city.id === Number(currentCity));

	const onToggle = () => setIsOpen((currState) => !currState);

	const handleOnSelect = (data) => {
		onSelect(data)
		onToggle()
	}

	return (
		<>
			{currentCityName?.name && (
				<div className='flex flex-col gap-1'>
					<span className='text-xs'>OFERTAS VÁLIDAS PARA:</span>
					<h3 className="text-3xl font-bold text-primary mb-4 md:mb-0 cursor-pointer" onClick={onToggle}>
						{currentCityName?.name}  &#x2935;
					</h3>
				</div>
			)}
			<Dialog.Root open={isOpen} >
				<Dialog.Portal>
					<Dialog.Overlay className="bg-black/80 fixed inset-0 z-50" />
					<Dialog.Content className="max-w-2xl w-full rounded-md overflow-hidden fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 h-[300px]">
						<Dialog.Close
							className="absolute top-4 right-4 bg-white rounded-full size-12 flex items-center justify-center"
							aria-label="Fechar modal"
							onClick={() => onToggle()}
						>
							<IconX className="size-6" />
						</Dialog.Close>
						<div className="bg-white p-8 text-center flex flex-col gap-6 items-center">
							<Dialog.Title className="text-2xl font-bold text-primary">
								Selecione a sua cidade
							</Dialog.Title>

							<DropdownCity
								options={cities.map((city) => ({ city: city.id, value: city.name }))}
								onSelect={handleOnSelect}
							/>

							<Button asChild variant="secondary">
								<a
									href="https://brisanet.myog.io/assine/?resellerId=10563"
									target="_blank"
									rel="noreferrer"
								>
									Quero assinar agora
									<IconArrowUpRight />
								</a>
							</Button>
						</div>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</>

	)
}
