import React from "react";
import { render, screen } from "@testing-library/react"
import PageNotFound from "./index";

describe('404 Page', () => {
    it('Should render 404 Page screen', () => {
        render(<PageNotFound />)
        expect(screen.getByText('404')).toBeInTheDocument();
        expect(screen.getByText('Página não encontrada!')).toBeInTheDocument();
    });
})