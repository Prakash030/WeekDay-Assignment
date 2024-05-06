import React, { CSSProperties } from 'react'
import Select from 'react-select';
import {
    EngineeringOption,
    GroupedOption,
    ProductOption,
    groupedOptions,
} from '../../utils/data'



const formatGroupLabel = (data: GroupedOption) => (
    <div className='groupStyles'>
        <span>{data.label}</span>
    </div>
);

const Header = ({ minExp,
    setMinExp,
    minPay,
    setMinPay,
    companyName,
    setCompanyName,
    setRemote,
    remote,
    locationArray,
    setLocation,
    location,
    roles,
    setRoles,
    }:{
        minExp: number,
        setMinExp: React.Dispatch<React.SetStateAction<number>>,
        minPay: number | null,
        setMinPay: React.Dispatch<React.SetStateAction<number | null>>,
        companyName: string,
        setCompanyName: React.Dispatch<React.SetStateAction<string>>,
        setRemote: React.Dispatch<React.SetStateAction<string>>,
        remote: string,
        locationArray: string[],
        setLocation: React.Dispatch<React.SetStateAction<string>>,
        location: string,
        roles: string[],
        setRoles: React.Dispatch<React.SetStateAction<string[]>>,
    }) => {

    const handleExperienceChange = (selectedOption: { value: number; label: string } | null) => {
        setMinExp(selectedOption?.value || 1);
    };
    const handleMinPayChange = (selectedOption: { value: number; label: string } | null) => {
        setMinPay(selectedOption?.value || 0);
    }
    const handleCompanyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCompanyName(e.target.value);
    }
    

    return (
        <div style={{ marginTop: "50px" }}>
            <div style={{
                display: 'flex',
                justifyContent: 'start',
                paddingLeft: '100px',
                paddingRight: '80px',
                alignItems: 'center',
                gap: '5px',
                flexWrap: 'wrap',
            }} className='headContainer'>
                <div>
                    <p style={{
                    visibility: roles.length>0? 'visible': 'hidden',
                }}
                >Roles</p>
                    <Select<EngineeringOption | ProductOption, false, GroupedOption>
                        isMulti
                        styles={{
                            container: (base: CSSProperties) => ({
                                ...base,
                                minWidth: '180px',
                            }),
                        }}
                        placeholder="Roles"
                        options={groupedOptions}
                        formatGroupLabel={formatGroupLabel}
                        value={roles.map((role) => {
                            const roleObj = groupedOptions.flatMap((group) => group.options).find((option) => option.value === role);
                            return roleObj ? { value: roleObj.value, label: roleObj.label } : undefined;
                        })}
                        onChange={(selectedOptions) => {
                            setRoles(selectedOptions ? selectedOptions?.map((option) => option.value) : []);
                        }}
                    />
                </div>
                <div>
                    <p>Experience</p>
                    <Select
                        placeholder="Min experience"
                        styles={{
                            container: (base: CSSProperties) => ({
                                ...base,
                                minWidth: '180px',
                            }),
                        }}
                        isClearable
                        options={
                            [
                                { value: 1, label: '1' },
                                { value: 2, label: '2' },
                                { value: 3, label: '3' },
                                { value: 4, label: '4' },
                                { value: 5, label: '5' },
                                { value: 6, label: '6' },
                                { value: 7, label: '7' },
                                { value: 8, label: '8' },
                                { value: 9, label: '9' },
                                { value: 10, label: '10' },
                            ]
                        }
                        value={minExp ? { value: minExp, label: `${minExp}` } : null}
                        onChange={handleExperienceChange}
                    />
                </div>
                <div>

                    <p style={{
                        visibility: !minPay ? 'hidden' : 'visible',
                    }}
                    >Min Base Pay</p>
                    <Select
                        placeholder="Min base pay"
                        styles={{
                            container: (base: CSSProperties) => ({
                                ...base,
                                minWidth: '180px',
                            }),
                        }}
                        isClearable
                        options={
                            [
                                { value: 0, label: '0K USD' },
                                { value: 10, label: '10K USD' },
                                { value: 20, label: '20K USD' },
                                { value: 30, label: '30K USD' },
                                { value: 40, label: '40K USD' },
                                { value: 50, label: '50K USD' },
                                { value: 60, label: '60K USD' },
                                { value: 70, label: '70K USD' },
                                { value: 80, label: '80K USD' },
                                { value: 90, label: '90K USD' },
                            ]
                        }
                        value={minPay ? { value: minPay, label: `${minPay}K USD` } : null}
                        onChange={handleMinPayChange}
                    />
                </div>
                <div>
                <p style={{
                        visibility: !location ? 'hidden' : 'visible',
                    }}
                    >Location</p>
                <Select
                    styles={{
                        container: (base: CSSProperties) => ({
                            ...base,
                            minWidth: '180px',
                        }),
                    }}
                    placeholder="Location"
                    isClearable
                    isDisabled={remote === 'remote'}
                    value={location ? { value: location, label: location.charAt(0).toUpperCase() + location.slice(1) } : null}
                    options={locationArray.map((location) => ({ value: location, label: location.charAt(0).toUpperCase() + location.slice(1) })) || []}
                    onChange={(selectedOption: { value: string; label: string } | null) => {
                        setLocation(selectedOption?.value || '');
                    }} 
                />
                </div>
                <div>
                <p style={{
                    visibility:  'hidden',
                }}
                >Tech Stack</p>
                <Select
                    styles={{
                        container: (base: CSSProperties) => ({
                            ...base,
                            minWidth: '180px',
                        }),
                    }}
                    placeholder="Tech stack"
                    
                />
                </div>
                <div>
                <p style={{
                    visibility: remote?  'visible': 'hidden',
                }}
                >Remote</p>
                <Select
                    styles={{
                        container: (base: CSSProperties) => ({
                            ...base,
                            minWidth: '180px',
                        }),
                    }}
                    placeholder="Remote"
                    isClearable
                    options={
                        [
                            { value: 'remote', label: 'Remote' },
                            { value: 'onsite', label: 'On-site' },
                        ]
                    }
                    value={remote ? { value: remote, label: remote } : null}
                    onChange={(selectedOption: { value: string; label: string } | null) => {
                        setRemote(selectedOption?.value || '');
                    }}
                />
                </div>
                <div>
                <p style={{
                    visibility: companyName?  'visible': 'hidden',
                }}
                >Company Name</p>
                <input
                    style={{
                        minWidth: '180px',
                        height: '40px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        padding: '10px',

                    }}
                    value={companyName}
                    placeholder='Search Company Name'
                    onChange={handleCompanyNameChange}
                />
                </div>

            </div>
        </div>
    )
}

export default Header