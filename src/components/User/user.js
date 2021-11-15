import './user.css'
export function User({item}) {
    const {name, email, username, phone, website} = item
    return (
        <div className={'user_box'}>
             <p className={'user_field'}>
                 {name}
             </p>
             <p className={'user_field'}>
                 {username}
             </p>
             <p className={'user_field'}>
                 {email}
             </p>
             <p className={'user_field'}>
                 {phone}
             </p>
             <p className={'user_field'}>
                 {website}
             </p>
         </div>
    )
}
