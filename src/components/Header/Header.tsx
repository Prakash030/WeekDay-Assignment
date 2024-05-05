import React, { CSSProperties } from 'react'
import Select from 'react-select';
import {
    ColourOption,
    colourOptions,
    FlavourOption,
    GroupedOption,
    groupedOptions,
} from '../../utils/data'
import { fetchSampleJdJSON } from '../../utils/apiData';



const formatGroupLabel = (data: GroupedOption) => (
    <div className='groupStyles'>
        <span>{data.label}</span>
        <span className='groupBadgeStyles'>{data.options.length}</span>
    </div>
);

const Header = () => {

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'start',
                paddingLeft: '100px',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap',
            }}>
                <Select<ColourOption | FlavourOption, false, GroupedOption>
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
                />
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
                />
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
                            { value: 10, label: '10L' },
                            { value: 20, label: '20L' },
                            { value: 3, label: '30L' },
                            { value: 4, label: '40L' },
                            { value: 5, label: '50L' },
                            { value: 6, label: '60L' },
                            { value: 7, label: '70L' },
                            { value: 8, label: '80L' },
                            { value: 9, label: '90L' },
                            { value: 10, label: '100L' },
                        ]
                    }
                />
                <Select<ColourOption | FlavourOption, false, GroupedOption>
                    styles={{
                        container: (base: CSSProperties) => ({
                            ...base,
                            minWidth: '180px',
                        }),
                    }}
                    placeholder="Location"
                    options={groupedOptions}
                    formatGroupLabel={formatGroupLabel}
                />
                <Select<ColourOption | FlavourOption, false, GroupedOption>
                    styles={{
                        container: (base: CSSProperties) => ({
                            ...base,
                            minWidth: '180px',
                        }),
                    }}
                    placeholder="Tech stack"
                    options={groupedOptions}
                    formatGroupLabel={formatGroupLabel}
                />
                <Select<ColourOption | FlavourOption, false, GroupedOption>
                    styles={{
                        container: (base: CSSProperties) => ({
                            ...base,
                            minWidth: '180px',
                        }),
                    }}
                    placeholder="Remote"
                    options={groupedOptions}
                    formatGroupLabel={formatGroupLabel}
                />
                <input
                    style={{
                        minWidth: '180px',
                        height: '40px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        padding: '10px',
                    }}
                    placeholder='Search Company Name'
                />

            </div>
        </div>
    )
}

export default Header