import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Button from './Button'
import clsx from 'clsx'

const Form = ({ handleInfo }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  const onSubmit = (values) => {
    console.log(values)
  }

  useEffect(() => {
    const subscription = watch((data) => {
      handleInfo(data)
      console.log('inside form', data)
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [watch, handleInfo])

  return (
    <div className="w-[380px] h-fit self-center">
      {!isSubmitSuccessful && (
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* ----------INPUT NAME--------- */}
          <div className="w-full">
            <label htmlFor="name" className="cursor-pointer">
              <p className="text-xs mb-2 tracking-wider">CARDHOLDER NAME</p>
              <input
                type="text"
                id="name"
                className={clsx(
                  'w-full text-lg px-4 py-2 rounded-md border-gray-300 border focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm placeholder:italic placeholder:text-gray-300',
                  errors.name && 'ring-1 ring-red-500 border-red-500 '
                )}
                placeholder="e.g. Jane AppleSeed"
                {...register('name', {
                  required: 'Name is required',
                  pattern: {
                    value: /[a-zA-Z]+/,
                    message: 'Wrong format, letters only',
                  },
                })}
              />
            </label>
            <div className="h-4 mt-2">
              <p className="text-xs text-red-500">{errors.name?.message}</p>
            </div>
          </div>
          {/* ----------INPUT CARD NO.--------- */}
          <div className="w-full ">
            <label htmlFor="number" className="cursor-pointer">
              <p className="text-xs mb-2 tracking-wider">CARD NUMBER</p>
              <input
                type="text"
                id="number"
                maxLength={16}
                className={clsx(
                  'w-full text-lg px-4 py-2 rounded-md border-gray-300 border focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm placeholder:italic placeholder:text-gray-300',
                  errors.number && 'ring-1 ring-red-500 border-red-500 '
                )}
                placeholder="e.g. 1234 5678 9123 0000"
                {...register('number', {
                  required: 'Card number is required',
                  minLength: { value: 16, message: 'Not enough numbers' },
                  pattern: {
                    value: /[0-9]{16}/,
                    message: 'Wrong format, numbers only',
                  },
                })}
              />
            </label>
            <div className="h-4 mt-2">
              <p className="text-xs text-red-500">{errors.number?.message}</p>
            </div>
          </div>
          <div className="flex items-end gap-2 mb-4">
            {/* ----------INPUT MONTH--------- */}
            <div className="flex items-end gap-2 basis-1/2">
              <div className="w-full basis-1/2">
                <label htmlFor="month" className="cursor-pointer">
                  <p className="text-[10px] mb-2 tracking-wider">
                    EXP. DATE (MM/YY)
                  </p>
                  <input
                    type="text"
                    id="month"
                    maxLength={2}
                    className={clsx(
                      'w-full text-lg px-4 py-2 rounded-md border-gray-300 border focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm placeholder:italic placeholder:text-gray-300',
                      errors.month && 'ring-1 ring-red-500 border-red-500 '
                    )}
                    placeholder="MM"
                    {...register('month', {
                      required: "Can't be blank",
                      pattern: {
                        value: /[0-9]{2}/,
                        message: 'Wrong format, numbers only',
                      },
                      min: 1,
                      max: { value: 12, message: 'Invalid month' },
                    })}
                  />
                </label>
                <div className="h-4 mt-2">
                  <p className="text-[11px] text-red-500">
                    {errors.month?.message}
                  </p>
                </div>
              </div>
              {/* ----------INPUT YEAR--------- */}
              <div className="w-full basis-1/2">
                <label htmlFor="year" className="cursor-pointer">
                  <p className="text-xs mb-2 tracking-wider"></p>
                  <input
                    type="text"
                    id="year"
                    maxLength={2}
                    className={clsx(
                      'w-full text-lg px-4 py-2 rounded-md border-gray-300 border focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm placeholder:italic placeholder:text-gray-300',
                      errors.year && 'ring-1 ring-red-500 border-red-500 '
                    )}
                    placeholder="YY"
                    {...register('year', {
                      required: "Can't be blank",
                      pattern: {
                        value: /[0-9]{2}/,
                        message: 'Wrong format',
                      },
                    })}
                  />
                </label>
                <div className="h-4 mt-2">
                  <p className="text-[11px] text-red-500">
                    {errors.year?.message}
                  </p>
                </div>
              </div>
            </div>
            {/* ----------CVC--------- */}
            <div className="w-full basis-1/2">
              <label htmlFor="cvc" className="cursor-pointer">
                <p className="text-xs mb-2 tracking-wider">CVC</p>
                <input
                  type="text"
                  id="cvc"
                  maxLength={3}
                  className={clsx(
                    'w-full text-lg px-4 py-2 rounded-md border-gray-300 border focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm placeholder:italic placeholder:text-gray-300',
                    errors.cvc && 'ring-1 ring-red-500 border-red-500 '
                  )}
                  placeholder="e.g 123"
                  {...register('cvc', {
                    required: "Can't be blank",
                    pattern: {
                      value: /[0-9]{3}/,
                      message: 'Wrong format',
                    },
                  })}
                />
              </label>
              <div className="h-4 mt-2">
                <p className="text-[11px] text-red-500">
                  {errors.cvc?.message}
                </p>
              </div>
            </div>
          </div>
          <Button text={'Confirm'}></Button>
        </form>
      )}
      {isSubmitSuccessful && (
        <div className="flex flex-col items-center w-full">
          <img src="icon-complete.svg" alt="completed" className="mb-8" />
          <h1 className="text-3xl text-center tracking-wider mb-3">
            THANK YOU!
          </h1>
          <p className="text-lg text-gray-500 mb-10">
            We&apos;ve added your card details
          </p>
          <Button text="Continue"></Button>
        </div>
      )}
    </div>
  )
}
export default Form
