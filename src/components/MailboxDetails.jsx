

import { useParams } from "react-router-dom";

export default function MailboxDetails({mailboxes}){

    const { mailboxId } = useParams()
    console.log('mailboxId:', mailboxId)

    const thisMailbox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId))

    if(!thisMailbox){
        return <h1>Mailbox not found.</h1>
    }
    return (
        <>
        <h2>Mailbox {thisMailbox._id}</h2>
        <p>Owner: {thisMailbox.owner}</p>
        <p>Mailbox size: {thisMailbox.size}</p>
        </>
    )
}