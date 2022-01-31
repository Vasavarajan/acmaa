import React from "react";

import { ClientContainer, ClientList, ClientLogo } from "./ClientElements";

const ClientSection = () => {
    return (
        <ClientContainer>
            <ClientList>
                <ClientLogo></ClientLogo>
            </ClientList>
        </ClientContainer>
    );
};

export default ClientSection;
