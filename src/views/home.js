import React from 'react';
import CardLayout from '../Components/Home/CardLayout/CardLayout';
import NumbersLayout from '../Components/Home/NumbersLayout/NumbersLayout';
import ProjectsLayout from '../Components/Home/ProjectsLayout/ProjectsLayout';
import HomeLanding from '../Components/Landings/HomeLanding/HomeLanding';

const home = () => {
	return (
		<>
			<HomeLanding />
			<CardLayout />
			<NumbersLayout />
      <ProjectsLayout />
		</>
	);
};

export default home;
