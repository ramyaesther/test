package com.matrimony.ServiceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.matrimony.Entity.Customer;
import com.matrimony.Entity.Payment;
import com.matrimony.Exception.ResourceNotFoundException;
import com.matrimony.Repository.CustomerRepository;
import com.matrimony.Repository.PaymentRepository;
import com.matrimony.Service.CustomerService;
import com.matrimony.Service.PaymentService;

@Service
public class PaymentServiceImpl implements PaymentService{

	
		private PaymentRepository paymentRepository;
		
		public PaymentServiceImpl(PaymentRepository paymentRepository) {
			super();
			this.paymentRepository = paymentRepository;
		}


		@Override
		public Payment savePayment(Payment payment) {
			return paymentRepository.save(payment);
			
		}


		@Override
		public List<Payment>getAllPayments(){
			return paymentRepository.findAll();
		}
		
		
		@Override
		public Payment getPaymentById(long id) {
			
			return paymentRepository.findById(id).orElseThrow(() ->
			                new ResourceNotFoundException("Payment","Id",id));
				
			}


		@Override
		public Payment updatePayment(Payment payment, long id) { 
			Payment pay = paymentRepository.findById(id).orElseThrow(
					()-> new ResourceNotFoundException("Payment", "Id", id));
			
			pay.setName(payment.getName());
			pay.setBankName(payment.getBankName());
			pay.setAccNo(payment.getAccNo());
			pay.setIfscCode(payment.getIfscCode());
			
			
			paymentRepository.save(pay);
			return pay;
		}	
		
		@Override
		public void deletePayment(long id) {
			
			paymentRepository.findById(id).orElseThrow(() -> 
			                      new ResourceNotFoundException("Payment","id",id));
			paymentRepository.deleteById(id);
			
		}
			
}
