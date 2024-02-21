import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export const SelectBox = () => {
    const options = [
        { value: 'cow', label: 'Cow' },
        { value: 'dog', label: 'Dog' },
        { value: 'cat', label: 'Cat' }
    ]
    return (
        <div>
            <Select
                options={options}
                className='w-[75vw] -translate-x-10 md:translate-x-0 md:w-96 mb-3 mt-10 relative z-10'
                isMulti
                defaultValue={[options[0]]}
                components={animatedComponents}
            />
            <button className='relative z-0 bg-green-500 -translate-x-10 md:translate-x-0 py-1 px-4 rounded-md hover:opacity-75'>Save</button>
        </div>
    )
}