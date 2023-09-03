import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Icons } from './Icons'

function AddItem() {
  return (
    <Dialog >
      <DialogTrigger asChild className='fixed bottom-4 right-4'>
      <Button size="icon" className='rounded-full'>
          <Icons.menu/>
          </Button>
      </DialogTrigger>
      <DialogContent className=" max-w-[90%] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Expense</DialogTitle>
          <DialogDescription>
            Daily Limit : &#8377;500
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center">
            <Label htmlFor="name" className="text-right">
              <Icons.menu className='ml-4'/>
            </Label>
            <Input id="name" type='text' className="col-span-3" placeholder='Enter a description' />
          </div>
          <div className="grid grid-cols-4 items-center">
            <Label htmlFor="price" className="text-right">
              <Icons.rupee className='ml-4'/>
            </Label>
            <Input id="price" type='number'  className="col-span-3" placeholder='0.00' />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog> 
  )
}

export default AddItem