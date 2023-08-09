import React from 'react';
import { Stack } from '@chakra-ui/react';
import { useAuth } from '../../Context/Context';

const powerBiEmbedUrls = {
	//GV Biogas
	O2fXCgvBShbB2cSKR15wcOuL4IN2:
		'https://app.powerbi.com/view?r=eyJrIjoiZDgyNDA2YmQtYTU3Ny00NDk3LWIyZWItYjRhN2I1OTA5Mzk4IiwidCI6IjhkY2Q1YWZhLWJjMGMtNDI4ZS1hZmIwLTc4MDg5ZmI1NDRkNiIsImMiOjR9&pageName=ReportSection837859f26274cd55faa2',
	//Alimentos Magros
	t5x83S6zJRNfXE5BITl7A9TJt733:
		'https://app.powerbi.com/view?r=eyJrIjoiMDFjZGVjODktZjhkMS00OTIwLTg0NDctYmZlNTBjZjc3Yzc0IiwidCI6IjhkY2Q1YWZhLWJjMGMtNDI4ZS1hZmIwLTc4MDg5ZmI1NDRkNiIsImMiOjR9&pageName=ReportSection7790c9c9b2bda7c220d8',
	//Resner
	Q6N4WP7tqCgsfx0tK2Aj0ZyuNWO2:
		'https://app.powerbi.com/view?r=eyJrIjoiOTY3NmM0ZDItMDQ1OC00ZWE4LWEwMmMtYWQ4NGE2NjY0OGQ3IiwidCI6IjhkY2Q1YWZhLWJjMGMtNDI4ZS1hZmIwLTc4MDg5ZmI1NDRkNiIsImMiOjR9&pageName=ReportSection',
	//3C Biogas
	'3hX52ke6gQS4HG5Ah8I3PqNN9E13':
		'https://app.powerbi.com/view?r=eyJrIjoiYjBiZDQ3MGItODcwYi00NWJmLWE4ZTctNTkwNTAyZDY1ZjMzIiwidCI6ImUzNjVlZjc3LTUxMzItNDIzMi04YWI5LWM5NzA1N2I2ODA0MyIsImMiOjR9&pageName=ReportSection88df21b5aa08eb3a1b36',
};

const PowerBi = () => {
	const { userUid } = useAuth();

	const embedUrl = powerBiEmbedUrls[userUid];

	return (
		<Stack marginBlock='3em'>
			<iframe
				title='Report Section'
				width='100%'
				height='636'
				src={embedUrl}
				frameborder='0'
				allowFullScreen={true}
			></iframe>
		</Stack>
	);
};

export default PowerBi;
