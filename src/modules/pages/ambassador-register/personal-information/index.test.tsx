import React from "react";
import { render, screen } from "@testing-library/react";
import PersonalInformation from "./index";

describe('Personal Information Page', () => {
    it('Should render on Personal Information screen', () => {
        render(<PersonalInformation />);

        expect(screen.getByText('Faça seu cadastro')).toBeInTheDocument();
    })
})