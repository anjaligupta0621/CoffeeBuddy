/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import OrderItemCard from './OrderItemCard';

interface OrderHistoryCardProps {
    navigationHandler: any;
    CartList: any;
    CartListPrice: string;
    OrderDate: string;
}

const OrderHistoryCard: React.FC<OrderHistoryCardProps> = ({
    navigationHandler,
    CartList,
    CartListPrice,
    OrderDate,
}) => {
  return (
    <View style={styles.CardContainer}>
      <View style={styles.CardHeader}>
        <View>
            <Text style={styles.HeaderTitle}>Order Time</Text>
            <Text style={styles.HeaderSubtitle}>{OrderDate}</Text>
        </View>
        <View style={styles.PriceContainer}>
            <Text style={styles.HeaderTitle}>Total Amount</Text>
            <Text style={styles.HeaderPrice}>$ {CartListPrice}</Text>
        </View>
      </View>
      <View style={styles.ListContainer}>
        {
            CartList.map((data: any, index: any) => (
                <TouchableOpacity key={index.toString() + data.id}>
                    <OrderItemCard
                        type={data.type}
                        name={data.name}
                        imagelink_square={data.imagelink_square}
                        special_ingredient={data.special_ingredient}
                        prices={data.prices}
                        ItemPrice={data.ItemPrice}
                    />
                </TouchableOpacity>
            ))
        }
      </View>
    </View>
  );
};

export default OrderHistoryCard;

const styles = StyleSheet.create({
  CardContainer: {
    gap: SPACING.space_10,
  },
  CardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_20,
    alignItems: 'center',
  },
  HeaderTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  HeaderSubtitle: {
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  PriceContainer: {
    alignItems: 'flex-end',
  },
  HeaderPrice: {
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryOrangeHex,
  },
  ListContainer: {
    gap: SPACING.space_20,
  },
});