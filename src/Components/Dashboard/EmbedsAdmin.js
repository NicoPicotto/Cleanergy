import React from 'react';
import { Stack, Heading, Divider } from '@chakra-ui/react';

const EmbedsAdmin = () => {
	const powerBiEmbedUrls = [
		//GV Biogas
		{
			name: 'GV Biogas',
			url: 'https://app.powerbi.com/view?r=eyJrIjoiZDgyNDA2YmQtYTU3Ny00NDk3LWIyZWItYjRhN2I1OTA5Mzk4IiwidCI6IjhkY2Q1YWZhLWJjMGMtNDI4ZS1hZmIwLTc4MDg5ZmI1NDRkNiIsImMiOjR9&pageName=ReportSection837859f26274cd55faa2',
		},
		//Alimentos Magros
		{
			name: 'Alimentos Magros',
			url: 'https://app.powerbi.com/view?r=eyJrIjoiMDFjZGVjODktZjhkMS00OTIwLTg0NDctYmZlNTBjZjc3Yzc0IiwidCI6IjhkY2Q1YWZhLWJjMGMtNDI4ZS1hZmIwLTc4MDg5ZmI1NDRkNiIsImMiOjR9&pageName=ReportSection7790c9c9b2bda7c220d8',
		},
		//Resner
		{
			name: 'Resener',
			url: 'https://app.powerbi.com/view?r=eyJrIjoiOTY3NmM0ZDItMDQ1OC00ZWE4LWEwMmMtYWQ4NGE2NjY0OGQ3IiwidCI6IjhkY2Q1YWZhLWJjMGMtNDI4ZS1hZmIwLTc4MDg5ZmI1NDRkNiIsImMiOjR9&pageName=ReportSection',
		},
		//3C Biogas
		{
			name: '3C Biogas - Reporte Financiero',
			url: 'https://app.powerbi.com/view?r=eyJrIjoiYjBiZDQ3MGItODcwYi00NWJmLWE4ZTctNTkwNTAyZDY1ZjMzIiwidCI6ImUzNjVlZjc3LTUxMzItNDIzMi04YWI5LWM5NzA1N2I2ODA0MyIsImMiOjR9&pageName=ReportSection88df21b5aa08eb3a1b36',
		},
		{
			name: '3C Biogas - Reporte de Producción',
			url: 'https://app.powerbi.com/view?r=eyJrIjoiZDc0ODU4OWMtMThlMy00ZTAwLThiNDYtYTI2ODNkOGI0ZDViIiwidCI6IjhkY2Q1YWZhLWJjMGMtNDI4ZS1hZmIwLTc4MDg5ZmI1NDRkNiIsImMiOjR9&pageName=ReportSectionacab2f9620bf901b0fae',
		}
	];

	return (
		<Stack marginBlock='3em'>
			{powerBiEmbedUrls.map((embed, index) => (
				<Stack key={index}>
					<Heading mb={5} fontWeight='bold' fontFamily="fonts.open">
						{embed.name}
					</Heading>
					<iframe
						title={`Report Section ${index}`}
						width='100%'
						height='500'
						src={embed.url}
						frameBorder='0'
						allowFullScreen={true}
					></iframe>
					<Divider marginBottom='2em' marginTop='2em' />
				</Stack>
			))}
		</Stack>
	);
};

export default EmbedsAdmin;
