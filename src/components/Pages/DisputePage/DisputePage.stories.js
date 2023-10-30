import DisputePage from './DisputePage';

export default {
	title: 'Dispute_Resolution/Pages/DisputePage',
	component: DisputePage,
};

export const DefaltDisputePage = {
	args: {
		card: {
			id: 0,
			creator: 'Конфликт с Ивановым И.',
			created_at: '6 октября',
			description:
				'Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов Л.П. оскорбил меня и непотребно себя повел: я попрос Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов Л.П. оскорбил меня и непотребно себя повел: я попросил предоставить мне копии платежных документов для направления контрагентам , на что Смирнов Л.Пил предоставить мне копии платежных документов для направления контрагентам , на что Смирнов Л.П...Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов м , на что Смирнов Л.П...Довожу до вашего сведения, что 5 октября главный... ',
			status: 'started',
			closed_at: '1 июля 11:37',
			files: [
				'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg',
				'https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.pdf',
				'https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg',
				'https://upload.wikimedia.org/wikipedia/commons/1/13/Saturn_during_Equinox_%28rot45%29.pdf',
			],
		},
		comments: [
			{
				name: 'Измайлов В.',
				date: '8 окт в 18:13',
				text: 'Здесь отображается какой-нибудь последний комментарий, совсем чуть-чуточку, ограничение, наверно, буквально в какие-нибудь пару строчичек, возможно, написано...Здесь отображается какой-нибудь последний комментарий, совсем чуть-чуточку, ограничение, какое-нибудь завершение обращения',
				files: [
					{ linkFile: '/', nameFile: 'Название документа.pdf' },
					{ linkFile: '/', nameFile: 'Название документа.jpg' },
				],
			},
			{
				name: 'Измайлов В.',
				date: '8 окт в 18:13',
				text: 'Здесь отображается какой-нибудь последний комментарий, совсем чуть-чуточку, ограничение, наверно, буквально в какие-нибудь пару строчичек, возможно, написано...Здесь отображается какой-нибудь последний комментарий, совсем чуть-чуточку, ограничение, какое-нибудь завершение обращения',
				files: [
					{ linkFile: '/', nameFile: 'Название документа.pdf' },
					{ linkFile: '/', nameFile: 'Название документа.jpg' },
				],
			},
		],
		user: {
			firstName: 'Иван',
			lastName: 'Иванов',
		}
	},
};
