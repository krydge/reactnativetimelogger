import { View, Text } from "react-native";
import InvoiceMenu from "../components/invoice/InvoiceMenu";
import CreateInvoice from "../components/invoice/CreateInvoice";
import { useState } from "react";

const InvoiceComponents = {
    ViewInvoices: "ViewInvoices",
    CreateInvoice: "CreateInvoice"
}
export default function InvoiceView() {
    const [InvoiceComponent, setInvoiceComponent] = useState(InvoiceComponents.CreateInvoice);
    return (
        <View>
            <InvoiceMenu setInvoiceComponent={setInvoiceComponent} InvoiceComponents={InvoiceComponents}></InvoiceMenu>
            
            {InvoiceComponent === InvoiceComponents.ViewInvoice &&<ViewInvoices/>}
            {InvoiceComponent === InvoiceComponents.CreateInvoice &&<CreateInvoice/>}
        </View>
    );
}